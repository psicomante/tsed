import {HttpServer, HttpsServer, PlatformTest} from "@tsed/common";
import {ServerSettingsService} from "@tsed/common/src/config";
import * as Sinon from "sinon";
import {SocketIOModule, SocketIOServer, SocketIOService} from "./index";

describe("SocketIOModule", () => {
  let getWebsocketServicesStub: any, printSocketEventsStub: any;
  describe("$afterListen()", () => {
    describe("with http server", () => {
      before(PlatformTest.create);
      before(() => {
        getWebsocketServicesStub = Sinon.stub(SocketIOModule.prototype as any, "getWebsocketServices");
        printSocketEventsStub = Sinon.stub(SocketIOModule.prototype as any, "printSocketEvents");
      });
      after(() => {
        PlatformTest.reset();
        getWebsocketServicesStub.restore();
        printSocketEventsStub.restore();
      });

      it(
        "should call attach method",
        PlatformTest.inject([ServerSettingsService], async (serverSettingsService: ServerSettingsService) => {
          // GIVEN
          const socketIOServer = {attach: Sinon.stub(), adapter: Sinon.stub()};
          const httpServer = {type: "http", get: Sinon.stub().returns("httpServer")};
          const httpsServer = {type: "https", get: Sinon.stub().returns("httpsServer")};
          const socketIOService = {addSocketProvider: Sinon.stub()};

          serverSettingsService.set("socketIO", {config: "config", adapter: "adapter"});

          const socketIOModule = await PlatformTest.invoke(SocketIOModule, [
            {token: HttpServer, use: httpServer},
            {token: HttpsServer, use: httpsServer},
            {token: SocketIOServer, use: socketIOServer},
            {token: SocketIOService, use: socketIOService}
          ]);

          getWebsocketServicesStub.returns([{provider: "provider"}]);
          // WHEN
          await socketIOModule.$afterListen();

          socketIOServer.attach.should.have.been.calledWithExactly(httpServer, {
            adapter: "adapter",
            config: "config"
          });
          socketIOServer.attach.should.have.been.calledWithExactly(httpsServer, {
            adapter: "adapter",
            config: "config"
          });

          getWebsocketServicesStub.should.have.been.calledWithExactly();
          socketIOServer.adapter.should.have.been.calledWithExactly("adapter");
          socketIOService.addSocketProvider.should.have.been.calledWithExactly({provider: "provider"});
        })
      );
    });
    describe("with https server", () => {
      before(PlatformTest.create);
      before(() => {
        getWebsocketServicesStub = Sinon.stub(SocketIOModule.prototype as any, "getWebsocketServices");
        printSocketEventsStub = Sinon.stub(SocketIOModule.prototype as any, "printSocketEvents");
      });
      after(() => {
        PlatformTest.reset();
        getWebsocketServicesStub.restore();
        printSocketEventsStub.restore();
      });

      it(
        "should call attach method",
        PlatformTest.inject([ServerSettingsService], async (serverSettingsService: ServerSettingsService) => {
          // GIVEN
          const socketIOServer = {attach: Sinon.stub(), adapter: Sinon.stub()};
          const httpServer = {type: "http", get: Sinon.stub().returns("httpServer")};
          const httpsServer = {type: "https", get: Sinon.stub().returns("httpsServer")};
          const socketIOService = {addSocketProvider: Sinon.stub()};

          serverSettingsService.set("socketIO", {config: "config"});
          serverSettingsService.set("http", false);

          const socketIOModule = await PlatformTest.invoke(SocketIOModule, [
            {token: HttpServer, use: httpServer},
            {token: HttpsServer, use: httpsServer},
            {token: SocketIOServer, use: socketIOServer},
            {token: SocketIOService, use: socketIOService}
          ]);

          getWebsocketServicesStub.returns([{provider: "provider"}]);
          // WHEN
          await socketIOModule.$afterListen();

          socketIOServer.attach.should.have.been.calledWithExactly(httpsServer, {
            config: "config"
          });

          getWebsocketServicesStub.should.have.been.calledWithExactly();
          socketIOService.addSocketProvider.should.have.been.calledWithExactly({provider: "provider"});
        })
      );
    });
  });
});

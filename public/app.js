Ext.Loader.setConfig({
  enabled: true,
  paths: {'Ext': '/extjs/src'}
});

Ext.application({
  name: 'BLP2',
  autoCreateViewport: true,
  controllers: ['LogbookBrowser'],
  requires: ['BLP2.SocketManager'],
  launch: function(){
    var socket = BLP2.SocketManager.connect();
    socket.on('connect', function(){
      socket.send({method: 'echo', body: 'Hello World'});
    });
  }
});

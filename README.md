# Instructions to setup local web server:

For AWS Lightsail Node.js Server

Copy to htdocs

sudo npm install
sudo npm i http-proxy-middleware@2.0.7

sudo npm install forever -g
Note: If you are using forever programmatically you should install forever-monitor.

$ cd /path/to/your/project
$ [sudo] npm install forever-monitor
	
sudo forever start server.js


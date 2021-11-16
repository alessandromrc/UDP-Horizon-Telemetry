const PORT = 5300;
const HOST = "0.0.0.0";

import { forza_data } from "./utils/json_arr.js";
import { dataParser } from "./utils/data_parser.js";

import dgram from "dgram";
const server = dgram.createSocket("udp4");

//FH4/FH5 buffer offset

const bufferOffset = 12;

server.on("listening", function () {
  var address = server.address();
  console.log(">  Listening on " + address.address + ":" + address.port);
});

export function Main() {
  server.on("message", function (message, remote) {
    dataParser(message);
    return forza_data;
  });
  server.bind(PORT, HOST);
}

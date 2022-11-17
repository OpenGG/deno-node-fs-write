# deno-node-fs-write
## node
v18.12.0
```bash
% node test.js > node.log 2>&1
Write Uint8Array(128) x 1048576: 856.299ms
Write Uint8Array(1024) x 131072: 612.076ms
Write Uint8Array(16384) x 8192: 432.582ms
Write Uint8Array(1048576) x 128: 266.441ms
```
## deno
deno 1.28.1 (release, x86_64-unknown-linux-gnu)

v8 10.9.194.1

typescript 4.8.3

```bash
% deno run --allow-read --allow-write test.js > deno.log 2>&1
Write Uint8Array(128) x 1048576: 20315ms
Write Uint8Array(1024) x 131072: 3482ms
Write Uint8Array(16384) x 8192: 349ms
Write Uint8Array(1048576) x 128: 94ms
```

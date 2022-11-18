# deno-node-fs-write
## node
v18.12.0
```bash
% node test.js > node.log 2>&1
Write Uint8Array(128) x 1048576: 1.303s
Write Uint8Array(1024) x 131072: 927.652ms
Write Uint8Array(16384) x 8192: 608.386ms
Write Uint8Array(65536) x 2048: 549.506ms
Write Uint8Array(1048576) x 128: 522.837ms
```
## deno
deno 1.28.1 (release, x86_64-unknown-linux-gnu)

v8 10.9.194.1

typescript 4.8.3

```bash
% deno run --allow-read --allow-write test.js > deno.log 2>&1
Write Uint8Array(128) x 1048576: 27899ms
Write Uint8Array(1024) x 131072: 4599ms
Write Uint8Array(16384) x 8192: 540ms
Write Uint8Array(65536) x 2048: 263ms
Write Uint8Array(1048576) x 128: 125ms
```

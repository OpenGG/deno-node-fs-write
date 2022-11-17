# deno-node-fs-write
## node
v18.12.0
```bash
Write Uint8Array(128) x 1048576: 1.302s
Write Uint8Array(1024) x 131072: 860.105ms
Write Uint8Array(1048576) x 128: 269.801ms
```
## deno
deno 1.28.1 (release, x86_64-unknown-linux-gnu)

v8 10.9.194.1

typescript 4.8.3

```bash
% deno run --allow-read --allow-write test.js > deno.log 2>&1
Write Uint8Array(128) x 1048576: 28474ms
Write Uint8Array(1024) x 131072: 4254ms
Write Uint8Array(1048576) x 128: 135ms
```

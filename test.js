const DenoWrite = async (filename) => {
    const out = await Deno.create(filename)

    const writer = out.writable.getWriter()

    const denoWrite = (u8) => writer.write(u8)

    return denoWrite
}

const NodeWrite = (filename) => {
    const fs = require('fs')

    const writeStream = fs.createWriteStream(filename, {
        flags: 'w+'
    })

    const nodeWrite = async (u8) => {
        const success = writeStream.write(u8)

        if (!success) {
            await new Promise((resolve) => {
                writeStream.once('drain', resolve)
            })
        }
    }

    return nodeWrite
}

const main = async () => {
    const isDeno = typeof Deno !== 'undefined'

    const write = isDeno ?
        await DenoWrite('out-deno.bin') :
        NodeWrite('out-node.bin')

    const SMALL_BUFF_SIZE = 256

    const COUNT = 1024 * 1024

    const u8 = new Uint8Array(SMALL_BUFF_SIZE)

    for (let i = 0; i < u8.length; i++) {
        u8[i] = Math.round(Math.random() * 0xFF)
    }

    for (let i = 0; i < COUNT; i++) {
        const chunk = new Uint8Array(
            u8.buffer,
            Math.floor(Math.random() * u8.length / 2),
            u8.length / 2
        )
        await write(chunk)
    }

    console.log('done')
}

main()

const DenoFile = async (filename) => {
    const out = await Deno.create(filename)

    const writer = out.writable.getWriter()

    const write = (u8) => writer.write(u8)
    const close = () => out.close()

    return {
        write,
        close,
    }
}

const NodeFile = (filename) => {
    const fs = require('fs')

    const writeStream = fs.createWriteStream(filename, {
        flags: 'w+'
    })

    const write = async (u8) => {
        const success = writeStream.write(u8)

        if (!success) {
            await new Promise((resolve) => {
                writeStream.once('drain', resolve)
            })
        }
    }

    const close = () => new Promise((resolve, reject) => {
        writeStream.close((err) => {
            if (err) {
                reject(err)
                return
            }
            resolve()
        })
    })

    return {
        write,
        close,
    }
}

const isDeno = typeof Deno !== 'undefined'

const testCase = async (buffSize, times) => {
    const file = isDeno ?
        await DenoFile('out-deno.bin') :
        NodeFile('out-node.bin')

    const u8 = new Uint8Array(buffSize)

    const msg = `Write Uint8Array(${buffSize}) x ${times}`

    console.time(msg)

    for (let i = 0; i < times; i++) {
        await file.write(u8)
    }

    console.timeEnd(msg)

    await file.close()
}

const main = async () => {
    await testCase(128, 1024 * 1024) // 128B x 1M
    await testCase(1024, 128 * 1024) // 1K x 128K
    await testCase(1024 * 1024, 128) // 1M x 128
}

main()

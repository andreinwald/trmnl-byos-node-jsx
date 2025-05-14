import React from "react";
import satori from "satori";
import {readFileSync, writeFileSync} from "node:fs"
import {Resvg} from "@resvg/resvg-js";

const svg = await satori(
    <div style={{color: 'black'}}>hello, world</div>,
    {
        width: 600,
        height: 400,
        fonts: [
            {
                name: 'Roboto',
                data: readFileSync('public/fonts/geneva-9.ttf'),
                weight: 400,
                style: 'normal',
            },
        ],
    },
)
const resvg = new Resvg(svg, {});
const pngData = resvg.render()
const pngBuffer = pngData.asPng()

writeFileSync('result.png', pngBuffer);

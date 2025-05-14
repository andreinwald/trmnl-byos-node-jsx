import satori from "satori";
import {readFileSync, writeFileSync} from "node:fs";
import {Resvg} from "@resvg/resvg-js";
import {ReactNode} from "react";

export async function renderApp(App: ReactNode) {
    const svg = await satori(
        App,
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
    const pngData = resvg.render();
    return pngData.asPng();
}
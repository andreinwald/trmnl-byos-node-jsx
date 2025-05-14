import satori from "satori";
import {readFileSync} from "node:fs";
import {Resvg} from "@resvg/resvg-js";
import {ReactNode} from "react";

export async function renderApp(App: ReactNode) {
    const svg = await satori(
        App,
        {
            width: 800,
            height: 480,
            fonts: [
                {
                    name: 'Roboto',
                    data: readFileSync('fonts/geneva-9.ttf'),
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
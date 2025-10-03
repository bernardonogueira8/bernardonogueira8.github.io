import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Bernardo Nogueira | Data Scientist & Math Teacher",
        description:
            "Artigos sobre Matemática, Ciência de Dados e Tecnologia, unindo prática e teoria de forma simples e acessível.",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>pt-BR</language>`,
    });
}

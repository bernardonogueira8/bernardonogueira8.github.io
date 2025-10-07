import { defineCollection, z } from "astro:content";

// 🔹 1. Define primeiro a coleção experience
const experienceCollection = defineCollection({
    type: "content",
    schema: z.object({
        date: z.string(),
        title: z.string(),
        company: z.string(),
        description: z.string(),
        order: z.number(),
    }),
});

// 🔹 2. Depois a staticData
const jsonDataCollection = defineCollection({
    type: "data",
    schema: z.object({
        profileImage: z.string(),
        profileAlt: z.string(),
        profileLink: z.string(),
        profileTitle: z.string(),
        profileName: z.string(),
        github: z.string().url(),
        githubText: z.string(),
        portfolioImage: z.string(),
        email: z.string().email(),
        linkedin: z.string().url(),
        instagram: z.string().url(),
        youtube: z.string().url(),
        alias: z.string(),
        contactSectionTitle: z.string(),
        contactSectionSubtitle: z.string(),
        contactSectionButtonText: z.string(),
        contactSectionButtonIcon: z.string(),
        techsTitle: z.string(),
        instagramIconName: z.string(),
        youtubeIconName: z.string(),
        githubIconName: z.string(),
        linkedinIconName: z.string(),
        emailIconName: z.string(),
        hobbies: z.array(z.string()),
        pageTitle: z.string(),
        pageDescription: z.string(),
        OGImage: z.object({
            url: z.string(),
            alt: z.string(),
        }),
    }),
});
export const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.string(),
        description: z.string(),
        tags: z.array(z.string()), // ex: ["projetos", "blog"]
        languages: z.array(z.string()).optional(),
        image: z
            .object({
                url: z.string(),
                alt: z.string(),
            })
            .optional(),
    }),
});

// 🔹 3. Aí sim exporta o objeto final
export const collections = {
    staticData: jsonDataCollection,
    experience: experienceCollection,
    posts: postsCollection,
};

import { ZodSchema, z } from "zod";

export const storySchema = (content: ZodSchema) =>
  z.object({
    name: z.string(),
    created_at: z.coerce.date(),
    published_at: z.coerce.date(),
    id: z.number(),
    uuid: z.string(),
    content,
    slug: z.string(),
    full_slug: z.string(),
    sort_by_date: z.string().nullable(),
    position: z.number(),
    tag_list: z.array(z.string()),
    is_startpage: z.boolean(),
    parent_id: z.number().nullable(),
    meta_data: z.record(z.string()).nullable(),
    group_id: z.string(),
    first_published_at: z.string(),
    release_id: z.number().nullable(),
    lang: z.string(),
    path: z.null(),
    alternates: z.array(alternateSchema),
    default_full_slug: z.string().nullable(),
    translated_slugs: z.array(translatedSlugSchema).nullable(),
  });

const alternateSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  full_slug: z.string(),
  is_folder: z.boolean(),
  parent_id: z.number(),
});

const translatedSlugSchema = z.object({
  path: z.string(),
  name: z.string(),
  lang: z.string(),
  published: z.boolean(),
});

export const linkSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  is_folder: z.boolean(),
  parent_id: z.number().nullable(),
  published: z.boolean(),
  path: z.string().nullable(),
  position: z.number(),
  uuid: z.string(),
  is_startpage: z.boolean(),
  real_path: z.string(),
});
export const linkResponseSchema = z.object({
  links: z.record(linkSchema),
});

export const storyResponseSchema = (storyContent = z.object({})) =>
  z.object({
    story: storySchema(storyContent),
    cv: z.number(),
    rels: z.array(z.any()),
    links: z.array(z.any()),
  });

export const storiesResponseSchema = (storyContent: ZodSchema = z.any()) =>
  z.object({
    stories: storySchema(storyContent).array(),
    cv: z.number(),
    rels: z.array(z.any()),
    links: z.array(z.any()),
  });

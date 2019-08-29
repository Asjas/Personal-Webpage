export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Project Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'meta',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Project Screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

module.exports = {
  adr: [{ type: 'autogenerated', dirName: 'adr' }],
  konsepter: [{ type: 'autogenerated', dirName: 'konsepter' }],
  docs: [
    'README',
    {
      type: 'category',
      label: 'Finne data',
      items: [
        {
          type: 'autogenerated',
          dirName: 'finne-data',
        },
      ],
    },
    {
      type: 'category',
      label: 'Prosessere data',
      items: [
        {
          type: 'autogenerated',
          dirName: 'prosessere-data',
        },
      ],
    },
    {
      type: 'category',
      label: 'Dele data',
      items: [
        {
          type: 'autogenerated',
          dirName: 'dele-data',
        },
      ],
    },
    {
      type: 'category',
      label: 'Dele innsikt',
      items: [
        {
          type: 'autogenerated',
          dirName: 'dele-innsikt',
        },
      ],
    },
  ],
};

const colors = {
  yellow: '#FFE66D',
  violet: '#C74DED',
  red: '#ee5d43',
  teal: '#04CEB2',
  lightblue: '#31B5E3',
  pink: '#B70361',
  darkblue: '#7777EA',
  green: '#96E072',
  gray: '#23262E',
}

const theme = {
  plain: {
    color: '#d6deeb',
    backgroundColor: colors.gray,
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: colors.yellow,
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: colors.red,
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted', 'attr-name'],
      style: {
        color: colors.red,
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(99, 119, 119)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: '',
      },
    },
    {
      types: ['variable'],
      style: {
        color: colors.yellow,
      },
    },
    {
      types: ['number'],
      style: {
        color: colors.lightblue,
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: {
        color: colors.yellow,
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ['punctuation'],
      style: {
        color: colors.darkblue,
      },
    },
    {
      types: ['selector', 'doctype'],
      style: {
        color: colors.violet,
        fontStyle: 'italic',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: colors.yellow,
      },
    },
    {
      types: ['tag', 'keyword'],
      style: {
        color: colors.violet,
      },
    },
    {
      types: ['operator'],
      style: {
        color: colors.red,
      },
    },
    {
      types: ['boolean'],
      style: {
        color: colors.teal,
      },
    },
    {
      types: ['property'],
      style: {
        color: colors.teal,
      },
    },
    {
      types: ['namespace'],
      style: {
        color: colors.red,
      },
    },
  ],
}

module.exports = theme

const utils = {
  methods: {
    typeColor(type: string): string {
      switch (type) {
        case 'Normal': return '#aa9';
        case 'Grass': return '#7c5';
        case 'Fire': return '#f42';
        case 'Rock': return '#ba6';
        case 'Ground': return '#db5';
        case 'Flying': return '#89f';
        case 'Water': return '#39f';
        case 'Poison': return '#a59';
        case 'Bug': return '#ab2';
        case 'Electric': return '#fc3';
        case 'Fairy': return '#e9e';
        case 'Fighting': return '#b54';
        case 'Psychic': return '#f59';
        case 'Steel': return '#aab';
        case 'Ice': return '#6cf';
        case 'Ghost': return '#66b';
        case 'Dragon': return '#76e';
        case 'Dark': return '#754';
        default: return '#000';
      }
    },
  },
};

export default utils;

// 全局 G2 设置
import G2 from 'g2';

G2.track(false);

const colors = [
  '#8543E0', '#F04864', '#FACC14', '#00bbff', '#66ffbb', '#2FC25B', '#fa8c16', '#a0d911',
];

const config = {
  ...G2.Theme,
  defaultColor: '#00bbff',
  colors: {
    default: colors,
    intervalStack: colors,
  },
  tooltip: {
    background: {
      radius: 4,
      fill: '#000',
      fillOpacity: 0.75,
    },
  },
};

G2.Global.setTheme(config);

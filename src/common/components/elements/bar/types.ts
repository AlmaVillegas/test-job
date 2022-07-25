
export type TypeMetrics = {
  [key: string]: TypeValuesMetrics[];
};

type TypeValuesMetrics = {
  subtitle1: string;
  subtitle2: string;
  value: number;
  color: string;
  left: number;
};

export type TypeRootBar = {
  captionsMetrics: TypeValuesMetrics[];
};

export type TypeContentCaption = {
  left: number;
};


export type TypeColor = {
  color: string;
};

export type TypeRootFlag = {
  percentage: number;
  BFP: number;
};
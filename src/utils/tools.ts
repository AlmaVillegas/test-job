export function pxToRem(value: number) {
  return `${value / 16}rem` 
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number 
  md: number 
  lg: number 
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  } 
}

export function isNegative(num: number) {
  if (Math.sign(num) === -1 || isNaN(num)) {
    return true 
  }
  return false 
}

export function calcPercentageFlag({
  percentage,
  BFP,
}: {
  percentage: number 
  BFP: number 
}) {
  let result = 0 
  if (BFP >= 0 && BFP < 9) {
    result = percentage - 2 
  } else if (BFP > 9 && BFP < 20) {
    result = percentage - 4 
  } else {
    result = percentage - 5 
  }
  return result 
}

export const stringToHTML = function (str: string) {
  var parser = new DOMParser() 
  var doc = parser.parseFromString(str, "text/html") 
  return doc.body 
} 

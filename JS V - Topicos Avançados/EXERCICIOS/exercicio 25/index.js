function calculateIMC(weight, height) {
  return new Promise((resolved, reject) => {
    if (typeof weight !== 'number' || typeof height !== 'number') {
      reject("The parameters entered are invalid");
    }
    resolved(weight / (height * height));
  });
}

async function tableIMC(weight, height) {
  try {
    const result = await calculateIMC(weight, height)

    const categories = [
      { name: 'magreza', upperBound: 18.5 },
      { name: 'normal', lowerBound: 18.5, upperBound: 24.9 },
      { name: 'sobrepeso', lowerBound: 24.9, upperBound: 29.9 },
      { name: 'obesidade', lowerBound: 29.9, upperBound: 39.9 },
      { name: 'obesidade grave', lowerBound: 40 }
    ];
    
    const category = categories.find(cat => 
      (cat.lowerBound === undefined || result >= cat.lowerBound) && 
      (cat.upperBound === undefined || result < cat.upperBound)
    );
    if (category) {
      console.table(categories)
      console.log(`Sua categoria é ${category.name} IMC[${result}]`);
    } else {
      console.log('Categoria não identificada');
    }
  } catch(err) {
    console.log(err)
  }
}

tableIMC(68.4, 1.87)
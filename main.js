let args = process.argv.slice(2);

console.log(`Yarıçapı ${args[0]} olan dairenin alanı: ${Math.pow(args[0]*1,2) * Math.PI}`);
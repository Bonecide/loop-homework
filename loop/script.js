for (let i = 1; i <= 50; i++) {
	document.write(i + '<br>');
}
 
for (let i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
      document.write(i + '<br>');
    }
}

let sum = 0;

for (let i = 0; i <= 100; i++) {
	sum += i;
}

document.write (sum);
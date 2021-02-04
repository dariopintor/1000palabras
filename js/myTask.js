var file = this.files[0];

var reader = new FileReader("leia.txt");

// Entire file
console.log(this.result);

// By lines
var lines = this.result.split('\n');
for (var line = 0; line < lines.length; line++) {
    console.log(lines[line]);
}
function loopingGanjilGenap(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 1) {
      console.log("Santai");
    } else {
      console.log("Berkualitas");
    }

    if (i % 3 === 0 && i % 2 === 1) {
      console.log("I Love Coding");
    }
  }
}

// Contoh pemanggilan fungsi dengan parameter 10
loopingGanjilGenap(10);

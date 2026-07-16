---
title: 'Bubble sort in Go'
description: 'A basic sorting algorithm that repeatedly swaps neighboring values.'
pubDate: 'Jul 14 2026'
heroImage: '../../../assets/blog-images/blog-placeholder-about.jpg'
---

Bubble sort repeatedly compares neighboring values and swaps them when they are in the wrong order. After each pass, the largest remaining value moves to the end.

## How it works

1. Compare the first two values.
2. Swap them if the left value is larger.
3. Continue comparing neighboring values through the slice.
4. Repeat until a complete pass makes no swaps.

## Go implementation

```go
package main

import "fmt"

func bubbleSort(numbers []int) {
	for {
		swapped := false

		for index := 0; index < len(numbers)-1; index++ {
			if numbers[index] > numbers[index+1] {
				numbers[index], numbers[index+1] = numbers[index+1], numbers[index]
				swapped = true
			}
		}

		if !swapped {
			return
		}
	}
}

func main() {
	numbers := []int{5, 1, 4, 2, 8}
	bubbleSort(numbers)
	fmt.Println(numbers) // [1 2 4 5 8]
}
```

## Complexity

- Time: `O(n²)` in the average and worst cases because values are compared over repeated passes.
- Space: `O(1)` because the slice is sorted in place.

## What I learned

Go supports swapping two values without a temporary variable. Tracking whether a swap happened also lets the function stop early when the slice is already sorted.

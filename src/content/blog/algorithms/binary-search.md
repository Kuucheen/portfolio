---
title: 'Binary search in Go'
description: 'A test post about finding a value in a sorted slice with binary search.'
pubDate: 'Jul 16 2026'
heroImage: '../../../assets/blog-images/blog-placeholder-about.jpg'
---

Binary search finds a value in a **sorted** collection by repeatedly cutting the search area in half.

## How it works

1. Look at the value in the middle of the slice.
2. If it is the target, return its index.
3. If the target is smaller, continue in the left half.
4. If the target is larger, continue in the right half.
5. Stop when there is nothing left to search.

## Go implementation

```go
package main

import "fmt"

func binarySearch(numbers []int, target int) int {
	left := 0
	right := len(numbers) - 1

	for left <= right {
		middle := left + (right-left)/2

		if numbers[middle] == target {
			return middle
		}

		if numbers[middle] < target {
			left = middle + 1
		} else {
			right = middle - 1
		}
	}

	return -1
}

func main() {
	numbers := []int{2, 5, 8, 12, 16, 23, 38}
	fmt.Println(binarySearch(numbers, 16)) // 4
}
```

## Complexity

- Time: `O(log n)` because the remaining search area is halved after every comparison.
- Space: `O(1)` because the iterative version only stores a few indexes.

## What I learned

The slice must already be sorted. I also used `left + (right-left)/2` to calculate the middle index without adding both boundaries directly.

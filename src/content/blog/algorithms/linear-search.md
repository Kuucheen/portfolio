---
title: 'Linear search in Go'
description: 'A simple search that checks each value in a slice from beginning to end.'
pubDate: 'Jul 15 2026'
heroImage: '../../../assets/blog-images/blog-placeholder-about.jpg'
---

Linear search checks every value in a collection until it finds the target. It works on both sorted and unsorted slices.

## How it works

1. Start with the first value in the slice.
2. Compare it with the target.
3. Return the index when they match.
4. Continue until the slice ends.
5. Return `-1` if the target was not found.

## Go implementation

```go
package main

import "fmt"

func linearSearch(numbers []int, target int) int {
	for index, number := range numbers {
		if number == target {
			return index
		}
	}

	return -1
}

func main() {
	numbers := []int{12, 4, 19, 7, 3}
	fmt.Println(linearSearch(numbers, 7)) // 3
}
```

## Complexity

- Time: `O(n)` because every value might need to be checked.
- Space: `O(1)` because no additional collection is created.

## What I learned

Go's `range` gives me both the index and value, which makes this implementation short and readable.

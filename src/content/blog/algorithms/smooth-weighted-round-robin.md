---
title: 'Smooth Weighted Round Robin'
description: 'The smooth weighted round robin is mainly used for load balancing (in network trafficking), but is also perfectly suitable for other tasks that involve weighted distributions.'
pubDate: 'Aug 08 2026'
heroImage: '../../../assets/blog-images/smooth-weighted-round-robin.png'
draft: false
---

The Smooth Weighted Round Robin (SWRR) is a more advanced version of the Weighted Round Robin (WRR), that distributes output more evenly.
The name "Smooth Weighted Round Robin" was popularized by the NGINX implementation of the Weighted Round Robin and is actually not a well
known name outside that field.

### Functionality

For example, lets imagine we have: <br />
Greg (weight 3) <br />
Trevor (weight 2) <br />
Mondy (weight 1) <br />
and we let the algorithm choose for 6 rounds. <br />

The WRR would output it like this: <br /> Greg, Greg, Greg, Trevor, Trevor, Mondy <br />
The SWRR however, would have the following output: <br /> Greg, Trevor, Greg, Mondy, Trevor, Greg

## Go implementation

To implement this, we need one simple struct, that has a weight and a currentWeight.
The name only exists to distinguish between the objects. 

```go
type WeightedObject struct {
	name          string
	weight        float32
	currentWeight float32
}
```

The weight stays constant and only currentWeight changes frequently because currentWeight keeps track of which element should be chosen next. 

<br />
Now let's define how many rounds we want and also create our main function, where we initialize our slice with our WeightedObjects in it.

```go
const rounds = 6

func main() {

	weights := []WeightedObject{
		{name: "Greg", weight: 3},
		{name: "Trevor", weight: 2},
		{name: "Mondy", weight: 1},
	}

    // We start with our weights also being
    // the currentWeights
	for i := range weights {
		weights[i].currentWeight = weights[i].weight
	}

}
```
<br />
We need to get our total weight amount, which is later used to change currentWeight.
So let's create a function for it.

```go
func getTotalWeightAmount(weights []WeightedObject) float32 {
	var total float32

	for _, weight := range weights {
		total += weight.weight
	}

	return total
}
```

<br />
While we're at it, we can also create another function we will need, that gets us our the element with the biggest currentWeight.

```go
func getBiggestCurrentWeight(weights []WeightedObject) *WeightedObject {
	biggestWeightIndex := 0

	for i := range weights {
		if weights[i].currentWeight > weights[biggestWeightIndex].currentWeight {
			biggestWeightIndex = i
		}
	}

	return &weights[biggestWeightIndex]
}
```
We return here a pointer because we need to alter currentWeight of the struct later.

<br />
Now we have all it takes to finish the algorithm. We can finally finish our main function.

```go
func main() {
	
	...

	totalWeights := getTotalWeightAmount(weights)

	var selectedWeights []string

    // Here we simulate the selection
	for range rounds {
		biggestWeight := getBiggestCurrentWeight(weights)

        // We remove the totalWeights
		biggestWeight.currentWeight -= totalWeights

        // and add the weights of the objects again
		for i := range weights {
			weights[i].currentWeight += weights[i].weight
		}

		selectedWeights = append(selectedWeights, biggestWeight.name)
	}

    // To see our output, we print it here
	for _, weight := range selectedWeights {
		fmt.Println(weight)
	}

}
```

You can see it's a really simple algorithm. 
By subtracting the total weight of the objects and readding the initial weight to everyone, the biggest weight slowly loses his weight until a smaller weight catches up and becomes the biggest one.


Thus, this is happening each round:  <br />
TotalWeight = Greg (3) + Trevor (2) + Mondy (1) = 6 <br />

We choose the biggest weight, which is Greg. <br />
Greg currently has the weight 3, but now loses 6, so he now has -3 <br />
Now everyone gets their original weight added again, so Greg now has 0, because his original weight was 3 <br />
So Greg = 0, Trevor = 4 and Mondy = 2 <br />
Now the cycle starts all over again and we choose Trevor because he has the biggest weight. <br />
We substract him the TotalWeight so now he has -2 <br />
Everyone gets their weight added again: Greg = 3, Trevor = 0 and Mondy = 3 <br />
. <br />
. <br />
. <br />


## Sources

This post is mainly inspired by the [commit by mdounin](https://mailman.nginx.org/pipermail/nginx-devel/2012-June/002300.html) where Smooth Weighted Round Robin is explained with an example.

You can find the full implementation of the Smooth Weighted Round Robin and other algorithms [here](https://github.com/Kuucheen/alGorithms). 
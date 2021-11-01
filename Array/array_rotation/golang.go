package main

import "fmt"

var arr []int = []int{1, 2, 3, 4, 5, 6, 7}

func rotate(arr []int, rotateBy int) []int {

	slice1 := arr[0:rotateBy]
	slice2 := arr[rotateBy:]

	return append(slice2, slice1...)
}

func main() {

	rotatedArr := rotate(arr, 2)

	fmt.Println(rotatedArr)

}

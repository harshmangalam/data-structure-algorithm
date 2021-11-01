
arr  = [1,2,3,4,5,6,7]

def rotate_arr(arr,rotate_by):
    slice_1 = arr[0:rotate_by]
    slice_2 = arr[rotate_by:]

    result = [*slice_2,*slice_1]

    print(result)



rotate_arr(arr,2)
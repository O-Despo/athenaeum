# Numpy the absolute basics for beginners

[source](https://numpy.org/doc/stable/user/absolute_beginners.html)

## Welcome to NP

- **NumPy**: Numerical Python
- Standart for working with python data
- Used in Pandas, SCiPy, MatPlotlib, scikit-learn,scikit-image
- provide **ndarray** homogenour n-dimentional array object

## install

```pip install numpy```

## import

```python
import numpy as np
```

## Diff between Python List and NumPy array

- All elements in NP array are homogeneous
- Because NP only has all the same type in arrays it can do optimized operations
- NP array faster and more compact the Python list.
- NP uses less memory
- NP allows to specify data type

## What is an arrya

- Man data structure for NP
- **Array**: grid of values contains raw data, how to locate elm, how to interpret
- A grid that can be intedts
- `dtype`
- **Possible indexs**: a array can be indexed by tuple of non-negative ints, bools, another array, or all ints
- **Rank**: the number of dimensions of a array
- **shape**: tuple of integers giving array size along each dimension

## initialization

```python
a = np.array([1, 2, 3])
a = np.array([[1, 3, 2], [1, 2, 3]])
print(a[0])
```

Accessed elm with `[]`

## More information about arrays

- **ndarray**: shorthand for n-dimensional array, array with any number of dimensions
- `ndarray`: call used to represent matrices and vectors
- **vector**: array with a sing dimension
- **matrix**: array with 2D
- **tensor**: for 3D or higher

#### Attrs of array

- **array**: fixed size container of items with same type and size
- dims deffined by shape
- **axes**: what NP call dimentions

e.i.

```
[[0., 0., 0.],
 [1., 1., 1.]]
```

- Has two axes
- arrays can be accessed and modifred by inexing and sliceing
- arrays can point to each other
- **attributes**: informaiton intrisic to the array

## How to create a basic array

1. `np.array([1, 2, 4)`
2. `np.zeros(2)` returns `array([0., 0.])`
3. `np.ones(2)` returns `array([1., 1.])`
4. `np.empty(2)` reutunr `array([ 3.14, 42.  ])  # may vary`

- **np.empty()**: creates a array with the states of the memory alraedy in place so it is somewhat random

## Adding, removing, and sorting elements¶

- `np.sort()`: sorts elements
- `np.concatenate()`: concatenate

```python
arr = np.array([2, 1, 5, 3, 7, 4, 6, 8])
np.sort(arr)
#array([1, 2, 3, 4, 5, 6, 7, 8])

a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

np.concatenate((a, b))
x = np.array([[1, 2], [3, 4]])
y = np.array([[5, 6]])
np.concatenate((x, y), axis=0)
```

### other sort options

- `argsort`: indirect sort along a specified axis, 
- `lexsort`: indirect stable sort
- `searchsort`: fined elms in arr
- `partition`: partial sort

## How to know the shape and size of a array

- `ndarray.ndim`: tell you the number of axes or dimentions
- `ndarray.size`: total number of elemnets
- `ndarray.shape`: returns a tuple of ints each interger representing the number of elements on that axis

```python
array_example = np.array([[[0, 1, 2, 3],

                           [4, 5, 6, 7]],


                          [[0, 1, 2, 3],

                           [4, 5, 6, 7]],


                          [[0 ,1 ,2, 3],

                           [4, 5, 6, 7]]])

array_example.ndim #(3)
array_example.size #(24)
array_example.shape #(3, 2, 4)
```

## Reshape an array

- `ndarray.reshape()`: gives the array a new shape without altering data
- `np.reshape(input, newshape, order)`: reshapes a array with more options that `ndarray.reshape()`
- when refering to `np.reshape()` the paramter `order` discribes method of storage in memory C-like index order or Fortan-like index order

- A reshaped array should have the same number of elements as the orginal array


```python
a = np.arange(6)
print(a)

b = a.reshape(3, 2)
print(b)

np.reshape(a, newshape=(1, 6), order='C')
```
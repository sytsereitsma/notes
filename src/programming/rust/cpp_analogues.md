# C++ analogues for rust

Still learning, so the translations to C++ may not be entirely correct.

# Ownership
Re-assigning heap allocated objects transfers ownership:

```rust
let v = vec![1, 2, 3];
let v2 = v;
//v is now invalid
```

```c++
auto v = std::make_unique <std::vector <int> > ({1, 2, 3});
auto v2 = std::move (v);
```

Same counts for functions:

```rust
fn main() {
	let v = vec![1, 2, 3];
	foo(v);

	//v is now invalid
}

fn foo(_v2 : Vec<i32>) {

}

```

```c++
int main() {
	auto v = std::make_unique <std::vector <int> > ({1, 2, 3});
	foo(std::move(v));
}

void foo (std::unique_ptr <std::vector <int> > v2) {

}
```

# Borrowing

Borrowing means references are passed around:

```rust
fn main() {
	let v = vec![1, 2, 3];
	foo(&v);

	//v is still valid
}

fn foo(_v2 : &Vec<i32>) {

}

```

```c++
int main() {
	auto v = std::make_unique <std::vector <int> > ({1, 2, 3});
	foo(v);
}

void foo (const std::unique_ptr <std::vector <int> >& v2) {

}
```

Now to make it interesting consider the following:

```rust
fn main() {
	let v = vec![1, 2, 3];
	foo(&v);

}

fn foo(v2 : &Vec<i32>) {
	let _v3 = *v2; //Not allowed (cannot move out of borrowed content), because we cannot take ownership of the borrowed value
}

```

```c++
int main() {
	auto v = std::make_unique <std::vector <int> > ({1, 2, 3});
	foo(v);
}

void foo (const std::unique_ptr <std::vector <int> >& v2) {
	auto v3 = std::move(v2); //Cannot take ownership, the unique_ptr is const
}
```
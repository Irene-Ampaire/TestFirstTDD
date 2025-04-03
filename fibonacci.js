function fibonacci(n){
    const fib = [0, 1]; // Initialize the first two Fibonacci numbers
    for (let i=2; i<n; i++){
        fib [i] = fib [i-1] + fib[i-2]// Calculate the next Fibonacci number
    }
    return fib// Return the entire Fibonacci sequence up to n

}

export default fibonacci;

function highestPeak(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;

    // Initialize the height matrix and queue for BFS
    const height = Array.from({ length: m }, () => Array(n).fill(Infinity));
    const queue = [];

    // Add all water cells to the queue with height 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]); // Add water cell to BFS queue
            }
        }
    }

    // Define directions (north, east, south, west)
    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    // Perform BFS
    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Check bounds and ensure the cell hasn't been visited
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === Infinity) {
                height[nx][ny] = height[x][y] + 1; // Update height
                queue.push([nx, ny]); // Add to queue
            }
        }
    }

    return height;
}


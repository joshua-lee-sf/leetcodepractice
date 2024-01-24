class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        row_counts = defaultdict(int)
        count = 0

        for row in grid:
            row_counts[tuple(row)] += 1
        
        for column in zip(*grid):
            count += row_counts[column]
        
        return count
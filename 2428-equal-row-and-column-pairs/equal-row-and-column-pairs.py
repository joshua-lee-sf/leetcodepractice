class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        row_counts = defaultdict(int)
        print(row_counts)
        count = 0

        for row in grid:
            row_counts[tuple(row)] += 1
        
        for column in zip(*grid):
            count += row_counts[column]

        print(row_counts)
        return count
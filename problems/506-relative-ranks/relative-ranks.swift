

class Solution {
    func findRelativeRanks(_ score: [Int]) -> [String] {

    let sorted = score.sorted { $0 > $1 }
    var dict = [Int: String]()
    let ranking = ["Gold Medal","Silver Medal","Bronze Medal"]

    for i in (0 ..< score.count) {
        if (i < 3) {
            dict[sorted[i]] = ranking[i];
        } else {
            dict[sorted[i]] = "\(i + 1)";
        }
    }

    return score.compactMap { dict[$0] }
    }
}
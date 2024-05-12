class Solution {
    func findRelativeRanks(_ score: [Int]) -> [String] {
        let sortedScores = score.sorted { $0 > $1 }
   
        var results: [String] = []
        for val in score {
            if let ranking = sortedScores.firstIndex(of: val) {
                let str = getPlacementName(ranking) 
                results.append(str)
            }
        }

        return results
    }
}

func getPlacementName(_ ranking: Int) -> String {
    var placeString = ""
    switch ranking {
                    case 0:
                    placeString = "Gold Medal"
                    case 1: 
                    placeString = "Silver Medal"
                    case 2: 
                    placeString = "Bronze Medal"
                    default:
                    placeString = "\(ranking + 1)"
    }
    return placeString
}
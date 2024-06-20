class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        sentenceList = sentence.split() 
        for i in range(len(sentenceList)):
            for item in dictionary:
                if sentenceList[i].startswith(item):
                    sentenceList[i] = item
        
        return " ".join(sentenceList)
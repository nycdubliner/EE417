import csv 
import json 

def main():
    # Driver Code 

    # Decide the two file paths according to your 
    # computer system 
    csvFilePath = r'nba_elo.csv'
    jsonFilePath = r'nba_elo.json'

    # Call the make_json function 
    make_json(csvFilePath, jsonFilePath)
    print('Done')



# Function to convert a CSV to JSON 
# Takes the file paths as arguments 
def make_json(csvFilePath, jsonFilePath): 
    data = []
    with open(csvFilePath) as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for i in csv_reader:
            data.append(i)
    with open(jsonFilePath, 'w') as json_file:
        json_file.write(json.dumps(data, indent=4))

            

if __name__ == '__main__':
    main()           
import csv

input_file = 'wyniki_gier.csv'    # Change to your input file path
output_file = 'wyniki_gier2.csv'  # Change to your desired output file path

with open(input_file, 'r', encoding='utf-8') as infile, \
     open(output_file, 'w', encoding='utf-8', newline='') as outfile:

    # Read CSV with semicolon delimiter
    reader = csv.reader(infile, delimiter=';')
    # Write CSV with comma delimiter
    writer = csv.writer(outfile, delimiter=',')

    for row in reader:
        writer.writerow(row)

print(f"Converted '{input_file}' from ';' delimiter to ',' delimiter and saved as '{output_file}'.")

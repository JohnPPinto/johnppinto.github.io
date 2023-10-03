import csv
from flask import Flask, render_template, request, Response

app = Flask(import_name=__name__)

@app.route('/')
def index_page():
    return render_template(template_name_or_list='index.html')

# App route for multiple html pages
# @app.route('/<string:page_name>')
# def html_page():
#     return render_template(template_name_or_list=page_name)

# Adding data to database in CSV file
def write_to_database(data):
    with open(file='database.csv', mode='a', newline='') as csv_file:
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        csv_writer = csv.writer(csv_file, 
                                delimiter=',', 
                                quotechar='"', 
                                quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([name, email, message])

# App route for form submission and saving form data to database
@app.route('/submit-form', methods=['GET', 'POST'])
def submit_form():
    if request.method == 'POST':
        try:
            data = request.form.to_dict()
            write_to_database(data=data)
            return Response(status=204)
        except Exception as e:
            return f'Something went wrong. Try again! {e}'
    else:
        return 'Something went wrong. Try again!'

# if __name__ == '__main__':
#     app.jinja_env.auto_reload = True
#     app.config['TEMPLATES_AUTO_RELOAD'] = True
#     app.run(debug=True)
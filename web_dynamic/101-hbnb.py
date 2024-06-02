from flask import Flask, render_template

app = Flask(__name__)

# Replace route 100-hbnb with 101-hbnb
@app.route('/101-hbnb')
def hbnb():
    # Your logic for rendering the template goes here
    return render_template('101-hbnb.html')

# Implement logic for State and City filter as required
# Add necessary routes and logic to handle the filtering

if __name__ == "__main__":
    app.run(debug=True)


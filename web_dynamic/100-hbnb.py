from flask import Flask, render_template

app = Flask(__name__)

# Replace route 4-hbnb with 100-hbnb
@app.route('/100-hbnb')
def hbnb():
    # Your logic for rendering the template goes here
    return render_template('100-hbnb.html')

# Implement logic for State and City filter as required
# Add necessary routes and logic to handle the filtering

if __name__ == "__main__":
    app.run(debug=True)


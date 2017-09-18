import periscope_archetype
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    periscope_archetype.ScorecardChart(
        id='chart'
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)

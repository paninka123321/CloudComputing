from Kohonen import Kohonen
from data_loader import load_prepare_data

def train():
    X,y = load_prepare_data()
    model = Kohonen(5,5,100,3,2)
    model.train(X,y)
    return model






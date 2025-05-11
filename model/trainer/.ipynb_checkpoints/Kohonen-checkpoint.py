#!/usr/bin/env python
# coding: utf-8

# In[1]:
import numpy as np

class Kohonen():
    def __init__(self, m,n, epochs, input_len, niu):
        self.M = m
        self.N = n
        self.epochs = epochs
        self.input_len = input_len
        self.w = np.random.rand(m, n, input_len)
        self.niu = niu
        self.labels = np.zeros((m, n))
    def eucl(self,x,y):
        return np.linalg.norm(x-y)
    def neigh_weight(self, n1,n2,t):
        return np.exp(-(self.eucl(n1,n2)*t)**2)
    def winning_neuron(self, input):
        min = np.inf
        min_i = np.inf
        min_j = np.inf
        for i in range (self.M):
            for j in range (self.N):
                dist = self.eucl(self.w[i][j],input)
                if (dist< min):
                    min = dist
                    min_i = i
                    min_j = j
        return min_i,min_j
    def suppress(self,t, niu=2):
        return niu*np.exp(-(t/niu))
    def weight_actualization(self, i_win, j_win, t, x):
        for i in range(self.M):
            for j in range(self.N):
                self.w[i][j] = self.w[i][j] + self.eucl(np.array([i_win,j_win]),np.array([i,j]))*self.suppress(t)*(x-self.w[i][j])

    def train(self, X,y):
        for epoch in range(self.epochs):
            indices = np.random.permutation(len(X))
            X = X[indices]
            y = y[indices]
            for x, label in zip(X,y):
                i,j = self.winning_neuron(x)
                self.weight_actualization(i,j,epoch,x)
                self.labels[i, j] = label
    def predict(self, X):
        predictions = []
        for x in X:
            i, j = self.winning_neuron(x)
            predictions.append(self.labels[i, j])  # Zwrócenie etykiety neuronu, który wygrał
        return np.array(predictions)







from model_train import train

def main():
    model = train()
    # zapisz model (np. Pickle, GCS)
    import joblib
    joblib.dump(model, 'model.pkl')

if __name__ == "__main__":
    main()

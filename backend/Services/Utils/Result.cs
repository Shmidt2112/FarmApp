namespace Services.Utils;

public class Result
{
    public bool IsSuccess { get; private set; }
    public IEnumerable<string> Errors { get; private set; }

    private Result(bool isSuccess, IEnumerable<string> errors)
    {
        IsSuccess = isSuccess;
        Errors = errors;
    }

    public static Result Success()
    {
        return new Result(true, Enumerable.Empty<string>());
    }

    public static Result Failure(IEnumerable<string> errors)
    {
        return new Result(false, errors);
    }

    public static Result Failure(params string[] errors)
    {
        return new Result(false, errors);
    }
}

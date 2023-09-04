using Dal.Entities;
using Microsoft.EntityFrameworkCore;

namespace Dal;

public class ApplicationDbContext: DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> contextOptions) : base(contextOptions)
    {

    }

    public DbSet<AnimalEntity> Animals { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("FarmDatabase");
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AnimalEntity>()
            .HasIndex(e => e.Name)
            .IsUnique();
        
        modelBuilder.Entity<AnimalEntity>()
            .Property(e => e.Name)
            .IsRequired();
    }
}
